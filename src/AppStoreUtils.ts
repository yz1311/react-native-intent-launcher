import {intent, IntentConstant, resolveInfo} from "../types";
import AppUtils from "./AppUtils";
import RomUtils from "./RomUtils";
import IntentLauncherUtils from "./IntentLauncherUtils";

const GOOGLE_PLAY_APP_STORE_PACKAGE_NAME = "com.android.vending";

class AppStoreUtils {
    /**
     * 获取跳转到应用商店的 Intent
     * <p>优先跳转到手机自带的应用市场</p>
     * @param packageName 包名
     * @param isIncludeGooglePlayStore 是否包括 Google Play 商店
     * @return 跳转到应用商店的 Intent
     */
    static async getAppStoreIntent(packageName: string, isIncludeGooglePlayStore?: boolean) {
        if(RomUtils.isSamsung()) {// 三星单独处理跳转三星市场
            let samsungAppStoreIntent = AppStoreUtils.getSamsungAppStoreIntent(packageName);
            if (samsungAppStoreIntent != null) return samsungAppStoreIntent;
        }
        if(RomUtils.isLeeco()) {// 乐视单独处理跳转乐视市场
            let leecoAppStoreIntent = AppStoreUtils.getLeecoAppStoreIntent(packageName);
            if (leecoAppStoreIntent != null) return leecoAppStoreIntent;
        }
        let uri = "market://details?id=" + packageName;
        let intent = {
            data: uri,
            flags: IntentConstant.FLAG_ACTIVITY_NEW_TASK,
        } as intent;
        let resolveInfos = await IntentLauncherUtils.getAvailableResolveInfos(intent) as Array<resolveInfo>;
        if(resolveInfos == null || resolveInfos.length === 0) {
            console.log('No app store!');
            return null;
        }
        let googleIntent = null;
        for (let resolveInfo of resolveInfos) {
            let pkgName = resolveInfo.activityInfo.packageName;
            if(GOOGLE_PLAY_APP_STORE_PACKAGE_NAME!==pkgName) {
                if(AppUtils.isAppSystem(pkgName)) {
                    intent.packageName = pkgName;
                    return intent;
                }
            } else {
                intent.packageName = GOOGLE_PLAY_APP_STORE_PACKAGE_NAME;
                googleIntent = intent;
            }
        }
        if(isIncludeGooglePlayStore && googleIntent != null) {
            return googleIntent;
        }
        intent.packageName = resolveInfos[0].activityInfo.packageName;
        return intent;
    };

    private static async getSamsungAppStoreIntent(packageName: string) {
        let intent = {
            classPackageName: 'com.sec.android.app.samsungapps',
            className: 'com.sec.android.app.samsungapps.Main',
            data: 'http://www.samsungapps.com/appquery/appDetail.as?appId='+packageName,
            flags: IntentConstant.FLAG_ACTIVITY_NEW_TASK,
        } as intent;
        if(await IntentLauncherUtils.isIntentAvailable(intent)) {
            return intent;
        }
        return null;
    };

    private static async getLeecoAppStoreIntent(packageName: string) {
        let intent = {
            classPackageName: 'com.letv.app.appstore',
            className: 'com.letv.app.appstore.appmodule.details.DetailsActivity',
            action: 'com.letv.app.appstore.appdetailactivity',
            packageName: packageName,
            flags: IntentConstant.FLAG_ACTIVITY_NEW_TASK,
        } as intent;
        if(await IntentLauncherUtils.isIntentAvailable(intent)) {
            return intent;
        }
        return null;
    };
}

export default AppStoreUtils;

import {NativeModules} from "react-native";

const PathUtilsModule = NativeModules.PathUtilsModule;

const PathUtils = {
    getRootPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getDataPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getDownloadCachePath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getInternalAppDataPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getInternalAppCodeCacheDir: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getInternalAppCachePath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getInternalAppDbsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getInternalAppDbPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getInternalAppFilesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getInternalAppSpPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getInternalAppNoBackupFilesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalStoragePath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalMusicPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalPodcastsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalRingtonesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAlarmsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalNotificationsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalPicturesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalMoviesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalDownloadsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalDocumentsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppDataPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppCachePath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppFilesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppMusicPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppPodcastsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppRingtonesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppAlarmsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppNotificationsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppPicturesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppMoviesPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppDownloadPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppDcimPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppDocumentsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getExternalAppObbPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getRootPathExternalFirst: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getAppDataPathExternalFirst: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    getCachePathExternalFirst: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
}

export default PathUtils;

import {NativeModules} from "react-native";

const PathUtilsModule = NativeModules.PathUtilsModule;

const PathUtils = {
    /**
     * 获取根路径
     */
    getRootPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    /**
     * 获取数据路径
     */
    getDataPath: ():Promise<string>=>{
        return PathUtilsModule.getDataPath();
    },
    /**
     * 获取下载缓存路径
     */
    getDownloadCachePath: ():Promise<string>=>{
        return PathUtilsModule.getDownloadCachePath();
    },
    /**
     * 获取内存应用数据路径
     */
    getInternalAppDataPath: ():Promise<string>=>{
        return PathUtilsModule.getInternalAppDataPath();
    },
    /**
     * 获取内存应用代码缓存路径
     */
    getInternalAppCodeCacheDir: ():Promise<string>=>{
        return PathUtilsModule.getInternalAppCodeCacheDir();
    },
    /**
     * 获取内存应用缓存路径
     */
    getInternalAppCachePath: ():Promise<string>=>{
        return PathUtilsModule.getInternalAppCachePath();
    },
    /**
     * 获取内存应用数据库路径
     */
    getInternalAppDbsPath: ():Promise<string>=>{
        return PathUtilsModule.getInternalAppDbsPath();
    },
    /**
     * 获取内存应用数据库路径
     */
    getInternalAppDbPath: ():Promise<string>=>{
        return PathUtilsModule.getInternalAppDbPath();
    },
    /**
     * 获取内存应用文件路径
     */
    getInternalAppFilesPath: ():Promise<string>=>{
        return PathUtilsModule.getInternalAppFilesPath();
    },
    /**
     * 获取内存应用 SP 路径
     */
    getInternalAppSpPath: ():Promise<string>=>{
        return PathUtilsModule.getInternalAppSpPath();
    },
    /**
     * 获取内存应用未备份文件路径
     */
    getInternalAppNoBackupFilesPath: ():Promise<string>=>{
        return PathUtilsModule.getInternalAppNoBackupFilesPath();
    },
    /**
     * 获取外存路径
     */
    getExternalStoragePath: ():Promise<string>=>{
        return PathUtilsModule.getExternalStoragePath();
    },
    /**
     * 获取外存音乐路径
     */
    getExternalMusicPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalMusicPath();
    },
    /**
     * 获取外存播客路径
     */
    getExternalPodcastsPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalPodcastsPath();
    },
    /**
     * 获取外存铃声路径
     */
    getExternalRingtonesPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalRingtonesPath();
    },
    /**
     * 获取外存闹铃路径
     */
    getExternalAlarmsPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAlarmsPath();
    },
    /**
     * 获取外存通知路径
     */
    getExternalNotificationsPath: ():Promise<string>=>{
        return PathUtilsModule.getRootPath();
    },
    /**
     * 获取外存图片路径
     */
    getExternalPicturesPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalPicturesPath();
    },
    /**
     * 获取外存影片路径
     */
    getExternalMoviesPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalMoviesPath();
    },
    /**
     * 获取外存下载路径
     */
    getExternalDownloadsPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalDownloadsPath();
    },
    /**
     * 获取外存文档路径
     */
    getExternalDocumentsPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalDocumentsPath();
    },
    /**
     * 获取外存应用数据路径
     */
    getExternalAppDataPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppDataPath();
    },
    /**
     * 获取外存应用缓存路径
     */
    getExternalAppCachePath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppCachePath();
    },
    /**
     * 获取外存应用文件路径
     */
    getExternalAppFilesPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppFilesPath();
    },
    /**
     * 获取外存应用音乐路径
     */
    getExternalAppMusicPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppMusicPath();
    },
    /**
     * 获取外存应用播客路径
     */
    getExternalAppPodcastsPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppPodcastsPath();
    },
    /**
     * 获取外存应用铃声路径
     */
    getExternalAppRingtonesPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppRingtonesPath();
    },
    /**
     * 获取外存应用闹铃路径
     */
    getExternalAppAlarmsPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppAlarmsPath();
    },
    /**
     * 获取外存应用通知路径
     */
    getExternalAppNotificationsPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppNotificationsPath();
    },
    /**
     * 获取外存应用图片路径
     */
    getExternalAppPicturesPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppPicturesPath();
    },
    /**
     * 获取外存应用影片路径
     */
    getExternalAppMoviesPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppMoviesPath();
    },
    /**
     * 获取外存应用下载路径
     */
    getExternalAppDownloadPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppDownloadPath();
    },
    /**
     * 获取外存应用数码相机图片路径
     */
    getExternalAppDcimPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppDcimPath();
    },
    /**
     * 获取外存应用文档路径
     */
    getExternalAppDocumentsPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppDocumentsPath();
    },
    /**
     * 获取外存应用 OBB 路径
     */
    getExternalAppObbPath: ():Promise<string>=>{
        return PathUtilsModule.getExternalAppObbPath();
    },
    /**
     * 优先获取外部根路径
     */
    getRootPathExternalFirst: ():Promise<string>=>{
        return PathUtilsModule.getRootPathExternalFirst();
    },
    /**
     * 优先获取外部数据路径
     */
    getAppDataPathExternalFirst: ():Promise<string>=>{
        return PathUtilsModule.getAppDataPathExternalFirst();
    },
    /**
     * 优先获取外部文件路径
     */
    getFilesPathExternalFirst: ():Promise<string>=>{
        return PathUtilsModule.getFilesPathExternalFirst();
    },
    /**
     * 优先获取外部缓存路径
     */
    getCachePathExternalFirst: ():Promise<string>=>{
        return PathUtilsModule.getCachePathExternalFirst();
    },
}

export default PathUtils;

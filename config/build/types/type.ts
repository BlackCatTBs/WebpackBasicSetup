export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
    favicon: string;
    public: string;
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'desktop' | 'mobile';

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer?: boolean;
    platform: BuildPlatform;
}
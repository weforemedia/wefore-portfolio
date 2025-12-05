import { useState, useRef, useEffect } from 'react';
import { getCloudinaryVideoUrl, getCloudinaryThumbnail } from '@/lib/cloudinary';

interface CloudinaryVideoProps {
    publicId: string;
    className?: string;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    autoPlay?: boolean;
    playOnHover?: boolean;
    showThumbnail?: boolean;
    width?: number;
    height?: number;
}

const CloudinaryVideo = ({
    publicId,
    className = '',
    muted = true,
    loop = true,
    controls = false,
    autoPlay = false,
    playOnHover = false,
    showThumbnail = true,
    width,
    height,
}: CloudinaryVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState<string>('');

    // Generate video URL with optimizations
    const videoUrl = getCloudinaryVideoUrl(publicId, {
        quality: 'auto',
        format: 'auto',
        width,
        height,
    });

    useEffect(() => {
        if (showThumbnail && !isLoaded) {
            const thumb = getCloudinaryThumbnail(publicId, { width, height });
            setThumbnailUrl(thumb);
        }
    }, [publicId, showThumbnail, isLoaded, width, height]);

    const handleMouseEnter = () => {
        if (playOnHover && videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (playOnHover && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleLoadedData = () => {
        setIsLoaded(true);
    };

    return (
        <div className="relative w-full h-full">
            {/* Thumbnail (shown until video loads) */}
            {showThumbnail && !isLoaded && thumbnailUrl && (
                <img
                    src={thumbnailUrl}
                    alt="Video thumbnail"
                    className={`absolute inset-0 w-full h-full object-cover ${className}`}
                />
            )}

            {/* Video */}
            <video
                ref={videoRef}
                src={videoUrl}
                className={className}
                muted={muted}
                loop={loop}
                controls={controls}
                autoPlay={autoPlay}
                playsInline
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onLoadedData={handleLoadedData}
                preload="metadata"
            />
        </div>
    );
};

export default CloudinaryVideo;

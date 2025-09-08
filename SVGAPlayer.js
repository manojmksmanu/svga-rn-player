import React, {useEffect, useRef} from 'react';
import {requireNativeComponent} from 'react-native';

const SVGAPlayerView = requireNativeComponent('SVGAPlayerView');

export default function SVGAPlayer({
  source,
  loops = 0,
  autoplay = true,
  style,
}) {
  const playerRef = useRef(null);
  const prevSource = useRef(null);

  useEffect(() => {
    // Stop previous animation when switching source
    if (prevSource.current && prevSource.current !== source) {
      playerRef.current?.stopAnimation?.();
    }
    prevSource.current = source;
  }, [source]);

  return (
    <SVGAPlayerView
      ref={playerRef}
      style={style}
      source={source}
      loops={loops}
      autoplay={autoplay}
    />
  );
}

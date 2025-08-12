package com.myapp

import android.view.View
import androidx.annotation.NonNull
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.opensource.svgaplayer.SVGAImageView
import com.opensource.svgaplayer.SVGAParser
import java.net.URL

class SVGAViewManager(private val reactContext: ReactApplicationContext) : SimpleViewManager<SVGAImageView>() {

    companion object {
        const val REACT_CLASS = "SVGAPlayerView"
    }

    private val parser: SVGAParser = SVGAParser(reactContext)

    @NonNull
    override fun getName(): String = REACT_CLASS

    @NonNull
    override fun createViewInstance(@NonNull reactContext: ThemedReactContext): SVGAImageView {
        return SVGAImageView(reactContext).apply {
            loops = 0 // Infinite by default
        }
    }

    @ReactProp(name = "source")
    fun setSource(view: SVGAImageView, source: String) {
        try {
            if (source.startsWith("http")) {
                parser.decodeFromURL(URL(source), object : SVGAParser.ParseCompletion {
                    override fun onComplete(videoItem: com.opensource.svgaplayer.SVGAVideoEntity) {
                        view.setVideoItem(videoItem)
                        view.startAnimation()
                    }
                    override fun onError() {}
                })
            } else {
                parser.decodeFromAssets(source, object : SVGAParser.ParseCompletion {
                    override fun onComplete(videoItem: com.opensource.svgaplayer.SVGAVideoEntity) {
                        view.setVideoItem(videoItem)
                        view.startAnimation()
                    }
                    override fun onError() {}
                })
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    @ReactProp(name = "loops", defaultInt = 0)
    fun setLoops(view: SVGAImageView, loops: Int) {
        view.loops = loops
    }

    @ReactProp(name = "autoplay", defaultBoolean = true)
    fun setAutoplay(view: SVGAImageView, autoplay: Boolean) {
        if (autoplay) view.startAnimation()
    }
}

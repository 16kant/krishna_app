package com.krishna_app;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import android.content.Intent;
import android.os.Bundle;
import android.net.Uri;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "krishna_app";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
      
      @Override
      protected Bundle getLaunchOptions() {
        String value = "";
        String type = "";
        String action = "";
        
        Intent intent = MainActivity.this.getIntent();
        
        action = intent.getAction();
        type = intent.getType();
        if (type == null) {
          type = "";
        }
        if (Intent.ACTION_SEND.equals(action) && "text/plain".equals(type)) {
          value = intent.getStringExtra(Intent.EXTRA_TEXT);
        } else if (Intent.ACTION_SEND.equals(action) && ("image/*".equals(type) || "image/jpeg".equals(type) || "image/png".equals(type) || "image/jpg".equals(type) ) ) {
          Uri uri = (Uri) intent.getParcelableExtra(Intent.EXTRA_STREAM);
          value = uri.toString();
        } else if (Intent.ACTION_SEND.equals(action) && "text/x-vcard".equals(type)) {
          Uri uri = (Uri) intent.getParcelableExtra(Intent.EXTRA_STREAM);
          value = uri.toString();
        } else {
          value = "";
        }

        Bundle bundle = new Bundle();
        bundle.putString("type", type);
        bundle.putString("value",value);
        return bundle;
      }
    };
  }
}

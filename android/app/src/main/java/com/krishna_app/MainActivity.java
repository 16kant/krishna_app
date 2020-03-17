package com.krishna_app;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.os.Bundle;
import android.widget.Toast;
import android.content.Intent;

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
        Intent intent = MainActivity.this.getIntent();
        Bundle bundle = new Bundle();
// Toast.makeText(this, intent.getStringExtra(Intent.EXTRA_TEXT), Toast.LENGTH_SHORT).show();
          // Log.e("bundle_data",intent.getStringExtra(Intent.EXTRA_TEXT)+" hh");
        bundle.putString("url", intent.getData.toString());
        return bundle;
      }
    };
  }
}

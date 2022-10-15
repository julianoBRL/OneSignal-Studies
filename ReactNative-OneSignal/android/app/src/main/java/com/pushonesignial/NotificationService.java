import androidx.core.app.NotificationCompat;
import com.onesignal.OSNotificationDisplayedResult;
import com.onesignal.OSNotificationPayload;
import com.onesignal.NotificationExtenderService;
import com.onesignal.OSNotificationReceivedResult;
import java.math.BigInteger;
import android.util.Log;

public class NotificationService extends NotificationExtenderService {
   @Override
   protected boolean onNotificationProcessing(OSNotificationReceivedResult receivedResult) {
      NotificationCompat.Builder builder = new NotificationCompat.Builder(this)
        .setContentTitle("textTitle")
        .setContentText("textContent")
        .setPriority(NotificationCompat.PRIORITY_DEFAULT);

      // Return true to stop the notification from displaying.
      return true;
   }
}

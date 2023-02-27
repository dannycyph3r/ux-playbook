
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/yuO5TfYtFRvMJEzX/scene.splinecode');


LottieInteractivity.create({
    mode: 'scroll',
    player: '#firstLottie',
    actions: [
        {
          visibility: [0,1],
          type: 'seek',
          frames: [0, 261],
        },
      ],
  })

  LottieInteractivity.create({
    player:'#tenthLottie',
    mode:"cursor",
    actions: [
        {
            type: "click",
            forceFlag: false
        }
    ]
});
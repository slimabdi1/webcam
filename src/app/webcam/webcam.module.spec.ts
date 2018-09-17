import { WebcamModule } from './webcam.module';

describe('WebcamModule', () => {
  let webcamModule: WebcamModule;

  beforeEach(() => {
    webcamModule = new WebcamModule();
  });

  it('should create an instance', () => {
    expect(webcamModule).toBeTruthy();
  });
});

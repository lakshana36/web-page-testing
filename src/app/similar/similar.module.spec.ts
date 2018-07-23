import { SimilarModule } from './similar.module';

describe('SimilarModule', () => {
  let similarModule: SimilarModule;

  beforeEach(() => {
    similarModule = new SimilarModule();
  });

  it('should create an instance', () => {
    expect(similarModule).toBeTruthy();
  });
});

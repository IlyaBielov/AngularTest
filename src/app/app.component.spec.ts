import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
    });
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the server text after a delay of at most 10 seconds', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    http.expectOne('/api/').flush('Купи слона');
    fixture.detectChanges();
    const text = () => fixture.nativeElement.querySelector('.elephant__block-text p').textContent;
    expect(text()).toBe('');

    tick(10000);
    fixture.detectChanges();
    expect(text()).toBe('Купи слона');
  }));
});

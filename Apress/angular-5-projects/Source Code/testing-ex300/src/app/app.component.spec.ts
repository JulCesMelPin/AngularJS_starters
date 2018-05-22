import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Service } from './service';
import { HttpClientModule } from '@angular/common/http/src/module';
import { RequestMatch } from '@angular/common/http/testing/src/api';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

describe('AppComponent (data found)', () => {
  let service: Service;
  let httpMock: HttpTestingController;
  let fixture, app, compiled;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [HttpClient, Service]
    }).compileComponents();

    service = TestBed.get(Service);
    httpMock = TestBed.get(HttpTestingController);

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    fixture.detectChanges();    
    compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('button').click();

  });

  it('should display the first place if there is one', async() => {

    const req = httpMock.expectOne('https://trailapi-trailapi.p.mashape.com?q[city_cont]=Atlanta');
    const mockData = 
    {  
      "places":[  
          {  
            "city":"Atlanta",
            "state":"Georgia",
            "country":"United States",
            "name":"Boat Rock",
            "parent_id":null,
            "unique_id":5370,
            "directions":"From the intersection of Interstate 20 and Fulton Industrial Boulevard go south for 3.8 miles, turn left onto Bakers Ferry Road SW, go 0.5 miles, turn left on Boat Rock Road SW, go 0.4 miles, look for small gravel driveway on the right, pull into small 6 car parking lot. There is a small kiosk at the edge of the lot with a rough map of the area and a trail leading up to the boulders. The lake area is located a few hundred yards to the southeast (see drtopo map).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;1220 Boat Rock Road Mapquest Link ",
            "lat":0.0,
            "lon":0.0,
            "description":null,
            "date_created":null,
            "children":[  
            ],
            "activities":[  
                {  
                  "name":"Boat Rock",
                  "unique_id":"2-1012",
                  "place_id":5370,
                  "activity_type_id":2,
                  "activity_type_name":"hiking",
                  "url":"http://www.tripleblaze.com/trail.php?c=3&i=1012",
                  "attribs":{  
                      "\"length\"":"\"1\""
                  },
                  "description":"For those of us who like hiking AND rock climbing! Very cool place just inside of Atlanta. We took our children here and they could climb some of the boulders. A great experience for families and it's fun getting to watch the expert climbers on the rocks!",
                  "length":1.0,
                  "activity_type":{  
                      "created_at":"2012-08-15T16:12:21Z",
                      "id":2,
                      "name":"hiking",
                      "updated_at":"2012-08-15T16:12:21Z"
                  },
                  "thumbnail":"http://images.tripleblaze.com/2009/07/Myspace-Pictures-130-0.jpg",
                  "rank":null,
                  "rating":0.0
                }
            ]
          }
      ]
    }
    req.flush(mockData);
    httpMock.verify();

    fixture.detectChanges();    

    expect(compiled.querySelector('#notFound')).toBeNull();
    expect(compiled.querySelector('#name').textContent).
        toContain('Boat Rock');
    expect(compiled.querySelector('#state').textContent).
        toContain('Georgia');
  });

  it('should display a not found message if there is empty response from the server', async() => {
    const req = httpMock.expectOne('https://trailapi-trailapi.p.mashape.com?q[city_cont]=Atlanta');
    req.flush('');
    httpMock.verify();

    fixture.detectChanges();    

    expect(compiled.querySelector('#notFound').textContent).
        toContain('We could not find a trail here. :(');
    expect(compiled.querySelector('#name')).toBeNull();
    expect(compiled.querySelector('#state')).toBeNull();
  });

  it('should display a not found message undefined if there is empty response object from the server', async() => {
    const req = httpMock.expectOne('https://trailapi-trailapi.p.mashape.com?q[city_cont]=Atlanta');
    req.flush('{}');
    httpMock.verify();

    fixture.detectChanges();    

    expect(compiled.querySelector('#notFound').textContent).
        toContain('We could not find a trail here. :(');
    expect(compiled.querySelector('#name')).toBeNull();
    expect(compiled.querySelector('#state')).toBeNull();
  });
});

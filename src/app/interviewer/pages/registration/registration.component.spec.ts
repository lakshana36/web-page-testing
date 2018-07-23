import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import{FormsModule, ReactiveFormsModule,FormControl} from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import{FormGroup, Validators} from '@angular/forms';
import { InterviewerService } from '../../interviewer.service';
import {HttpModule} from '@angular/http';
import { NgModule,DebugElement} from '@angular/core';
import { FakeCompEventService } from './fakeCompEventService';
import { BrowserModule , By} from '@angular/platform-browser';

fdescribe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports:[ReactiveFormsModule,HttpModule,FormsModule,BrowserModule],
      providers:[{provide:InterviewerService, useClass:FakeCompEventService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de= fixture.debugElement.query(By.css('form'));
    el= de.nativeElement;
  });

  it('should read form text',async(() => {
    expect(component.text).toEqual('interviewer registration page');
  }));
  it('should create', () =>{
    expect(component).toBeTruthy();
  });
  it('should create onupdate tobedefined',() =>{
    expect(component.onUpdate).toBeTruthy();
  });
  it('should create onupdate tobedefined', () =>{
    var skills=[
      {"id":1,"name":"DS"},
      {"id":2,"name":"Python"},
      {"id":3,"name":"Core java"},
  ];
  expect(component.onUpdate()).toEqual(skills);
  });
  it('should create Register function',() =>{
    expect(component.Register).toBeTruthy();
  });
  it('should create if form is valid', async(() =>{
    component.registration_form.controls['Role'].setValue('interviewer');
    expect(component.registration_form.valid).toBeFalsy();
  }));
  it('should check form to be truthy',async(() =>{
    component.registration_form.controls['Role'].setValue('interviewer');
    component.registration_form.controls['Name'].setValue('Shinchan');
    component.registration_form.controls['Email'].setValue('chan@Virtusa.co.in');
    component.registration_form.controls['Password'].setValue('chan@123');
    component.registration_form.controls['Mobile Number'].setValue('9894887733');
    component.registration_form.controls['Skills'].setValue('Angular5');
    expect(component.registration_form.invalid).toBeTruthy();
  }));
  it('should check clear function', async (() =>{
    fixture.detectChanges();
    spyOn(component,'clear');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    console.log(el);
    el.click();
    expect(component.clear).toHaveBeenCalledTimes(1);
  }));
  it('should get inner html from h1 tag',async (()=>{
    fixture.detectChanges();
    el = fixture.nativeElement.querySelector('h1');
    expect(el.innerText).toContain('Interviewer Registration');
  }));
  it('should call reset function', async(() =>{
    fixture.detectChanges();
    spyOn(component.registration_form,'reset');
    el= fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.registration_form.reset).toHaveBeenCalledTimes(1);
  }))
});

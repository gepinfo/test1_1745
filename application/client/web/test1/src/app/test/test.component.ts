import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
    public test:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private testService: TestService,
    ) { }

    ngOnInit() {
        this.test.created_by = sessionStorage.getItem('email') || ''; 
        
        
    
    }
    GpCreate() {
        this.testService.GpCreate(this.test).subscribe((data:any) => {
            this.test.name = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}
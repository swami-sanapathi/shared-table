import { JsonPipe, KeyValuePipe, TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Student } from '../models/student';
import { students as StudentInfo } from '../utils/data-access';
@Component({
    selector: 'app-table',
    standalone: true,
    template: `
        <table>
            <thead>
                <tr>
                    @for (item of students()[0] | keyvalue; track $index) {
                        <th>{{ item.key | titlecase }}</th>
                    }
                </tr>
            </thead>
            <tbody>
                @for (item of students(); track $index) {
                    {{ item | json }}, <br />
                    <td>{{ item.name }}</td>
                }
            </tbody>
        </table>
    `,
    imports: [KeyValuePipe, TitleCasePipe, JsonPipe],
    styles: `
    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
        font-family: Arial, Helvetica, sans-serif;
        }
      th, td {
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
        }
      tr:hover {
        background-color: #f5f5f5;
    }
    `,
})
export class SharedTableComponent {
    students = signal<Student[]>([]);
    constructor() {
        this.students.set(StudentInfo);
        console.log(this.students());
    }
}

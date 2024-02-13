import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/student.interface';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    async getAllStudent(): Promise<Student[]>  {
        return this.studentService.getStudents();
    }

    @Get(':id')
    async getOneStudent(@Param('id') id: string): Promise<Student>  {
        return this.studentService.getOneStudent(id);
    }

    @Put(':id')
    async updateOneStudent(@Param('id') id: string, @Body() data: StudentDTO): Promise<Student>  {
        return this.studentService.updateOneStudent(id , data);
    }

    @Delete(':id')
    async deleteOneStudent(@Param('id') id: string): Promise<Student>  {
        return this.studentService.deleteOneStudent(id);
    }

    @Post()
    async createStudent(@Body() data: StudentDTO): Promise<Student> {
        return await this.studentService.createStudent(data);
    }
}

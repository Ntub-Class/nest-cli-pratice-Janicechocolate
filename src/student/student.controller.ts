import { Controller, Get, Put, Body, Param, Delete, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {

    @Get()
    getStudent() {
        return 'OK';
    }

    @Get(':id')
    getOneStudent() {
        return 'OK';
    }

    @Post()
    postStudent(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putStudent(@Body() body, @Param('id') id) {
        return 'OK';
    }

    @Delete(':id')
    deleteStudent(@Param('id') id) {
        return 'OK';
    }

}

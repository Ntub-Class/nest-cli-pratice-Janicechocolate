import { Controller, Param, Post, Body, Get, Put, Delete } from '@nestjs/common';
import bodyParser = require('body-parser');

@Controller('news')
export class NewsController {

    @Get()
    getNews() {
        return 'OK';
    }

    @Get(':id')
    getOneNews(@Param('id') id) {
        return 'OK';
    }

    @Post()
    postNews(@Body() body) {
        return 'OK';
    }

    @Put(':id')
    putNews(@Body() bodyParser, @Param('id') id) {
        return 'OK';
    }

    @Delete(':id')
    deleteNews(@Param('id') id) {
        return 'OK';
    }

}

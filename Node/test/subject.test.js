const mongoose =require('mongoose');
const {Mcq, mcqSchema} = require('../app/model/app.model.mcq');
const {Option, optionSchema } = require('../app/model/app.model.option');
describe('TESTING MCQ', () => {

    beforeAll(()=>{
        mongoose.connect('mongodb://localhost:27017/mass',()=>{
            console.log('Mongo DB connected.');
        });
    });

    afterAll(async ()=>{
        Mcq.remove({},()=>{
            console.log('Documents flushed ')
        })
        await mongoose.disconnect();
    });

    it('Adding an mcq', async () => {
        var mcq = new Mcq({
            question: 'What is a primary key in DataBase ?',
            options: [
                new Option({
                    optionNumber: 1,
                    option: 'Feild with name key.'
                }),
                new Option({
                    optionNumber: 2,
                    option: 'Feild which represents value from other tables.'
                }),
                new Option({
                    optionNumber: 3,
                    option: 'Field which cannot be changed.'
                }),
                new Option({
                    optionNumber: 4,
                    option: 'Feild which give unique value to the column.'
                }),
            ],
            answer : 4
        });


        const result = await mcq.validate();
        expect(result).toEqual(undefined);
        const newData = await Mcq.create(mcq);
        expect(newData.answer).toEqual(4);
        
    });

    it('Updating MCQ',async ()=>{
        const mcq = await Mcq.findOne({answer : 4});

        mcq.options[0].option = 'Feild with name primary key.'
        const result = mcq.update({new : true});

        expect(result.options[0].option).toBe('Feild with name primary key.');
    });

    // it()
});
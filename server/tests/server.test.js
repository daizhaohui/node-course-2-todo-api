const expect = require('expect');
const request = require('supertest');
const {app} = require('../server');
const {Todo} = require('../models/todo');

beforeEach(done=>{
    Todo.remove({}).then(()=>{
       done();
    });
})

describe('Post/todo',()=>{
    it('should create a new todo',(done)=>{
        var text = "Test todo text";
        request(app).post('/todo').send({
            text:text
        }).expect(200).end((err,res)=>{
            if(err){
                return done(err);
            }
            Todo.find({}).then(todos=>{
                expect(todos.length).toBe(1);
                done();
            }).catch(e=>{
                done(e);
            });
        });
    });
});
const topStudent=require('./10.2')
const studentList=require('./data')

describe("test if Ivan has the max score",()=>{
    test('if there is a student name Ivan',()=> {
        
    expect(studentList[0].name).toEqual(topStudent.name)
    });
    test ('if there is student name Ivan?', () => {
    expect(studentList[1].name).toEqual(topStudent.name);
    }
    )}
)


    describe ("Does Ivan have the max score",()=>{
    test('if student Ivan has score 35',()=> {
        expect(studentList[0].score).toEqual(topStudent.score)
        // test('if topstudent has the score 35',()=> {
        //     expect(studentList.score).toEqual(topStudent.score("35"))
        // })
    }
    )}
    )
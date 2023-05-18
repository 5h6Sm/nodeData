const express = require('express');
const app = express();

app.use(express.urlencoded({extends:true}));
app.use(express.json());

app.get('/', (req, res) =>{
    res.send(`
    <form action = "/" method="post">
        <input type="submit" name="position" value="문과생">
        <input type="submit" name="position" value="이과생">
    </form>
    `);
});

app.post('/', (req, res) =>{
    const {
        body:{position},
    } = req;
    //여러 값을 전달받은 경우:
    //const {body : {position, title, description...},} = reql 로
    res.send(
        `<script>alert("${position}");
        window.location.href="/";
        </script>`
        //알림창이 뜨면서 확인 클릭 시 "location:3000/"으로 이동
    )
})

app.listen(3000, function(){
    console.log('서버 실행');
});


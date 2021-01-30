'use strict'


const endpoint = "http://localhost:5000/plants"

//I think we can refer to https://solve-programming.tistory.com/29
const BUCKET_NAME = "seeat-image-dev-image-bucket"

AWS.config.update({ // Credentials are OK
    accessKeyId: 'AKIAJH6CX7666BDD4HVQ',
    secretAccessKey: '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',
    region: 'ap-northeast-2'
});

function testUpload(){
    let s3 =  new AWS.S3({apiVersion: '2006-03-01'});
    let params = {
        Body: "12312412412",
        Bucket: BUCKET_NAME,
        Key: "test.json"
    };

    s3.upload(params, function(err, data){
        if (err) console.log(err)
        else console.log(data);
    })
}


const dummy_upload_image = (fileBlob) => {
    let fileName = fileBlob.name
    let fileLink;
    let s3 =  new AWS.S3({apiVersion: '2006-03-01'});
    let params = {
        Body: fileBlob,
        Bucket: BUCKET_NAME,
        Key: fileName
    };
    s3.upload(params, function(err, data){
        if (err) {
            console.log(err)
            alert("error !", err);
        }
        else {
            console.log(data.Location)
            fileLink = data.Location;
        }
    });
    return fileLink;
}

//결국 위 dummy_upload_umage(blob) 이 함수를 우리가 커스텀해서 특정 서버 URI로 저장하도록 코딩해야 함!

const editor = new toastui.Editor({
    el: document.querySelector('#editor'),
    height: '500px',
    initialEditType: 'wysiwyg',
    previewStyle: 'vertical',
    hooks: {
        addImageBlobHook: (blob, callback) => {
            const uploadedImageURL = dummy_upload_image(blob);
            console.log("in blob hook");
            console.log(uploadedImageURL);
            callback(`${uploadedImageURL}`);
            console.log(uploadedImageURL);
            return false;
        }
    }
});

const viewHtml = () => {
    console.log(editor.getHtml());
    const title = document.getElementById('titleInput').value;
    console.log(title);
    //에디터 인스턴스의 getHtml() 메서드 호출하면 html 코드 받아 올 수 있네
    //그리고 이미지 업로드하면 base64인코딩되서 글안에 올라감
    // 이거 imageBlobHook이 있긴 있는데..
}

const saveContentsToExpress = () => {
    const contents = editor.getHtml();
    const title = document.getElementById('titleInput').value;
    const data = new FormData();
    data.append('title', title);
    data.append('contents', contents);
    //폼데이터로 던지는게 나아보이는데? \n같은것도 안붙고 워ㅓㄴ하는 컨텐츠 그대로 들어오네
    fetch(endpoint, {
        method: 'POST',
        body: data
    }).then((res) => console.log(res));
}

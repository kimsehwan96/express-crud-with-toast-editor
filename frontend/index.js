'use strict'

//I thinks we can refer to https://solve-programming.tistory.com/29

const dummy_upload_image = (fileBlob) => {
    console.log(fileBlob)
    return "this is temp url!"
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
            callback(uploadedImageURL);
            return false;
        }
    }
});

const viewHtml = () => {
    console.log(editor.getHtml());
    //에디터 인스턴스의 getHtml() 메서드 호출하면 html 코드 받아 올 수 있네
    //그리고 이미지 업로드하면 base64인코딩되서 글안에 올라감
    // 이거 imageBlobHook이 있긴 있는데..
}
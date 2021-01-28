# 연구..

- toast UI editor에 이미지를 드롭하는 이벤트가 발생했을때
- base64인코딩이 아니라 특정 서버로 올리는 로직을 찾아보자..

- 현재 상태


![1](images/1.png)

- https://nhn.github.io/tui.editor/latest/addImageBlobHook
- 이거 참고해야 함

- 제출하는 이벤트가 발생했을때 완벽한 시나리오는 다음과 같음
    - 이미지를 드롭하여 에디터에 삽입했을때 우리가 원하는 특정 서버 URI로 저장되고, 바로 Img태그 안에 그 링크가 들어감
    - 이후 제출할때 getHtml() 메소드를 호출하고
    - 이 내용을 API 서버에 담아서 쑉 보내버리면 될듯
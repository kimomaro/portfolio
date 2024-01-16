/* $(function(){
   // window.onload 화면이 전부 로딩된 후 실행
   window.onload = function () {
     // h1 태그 지정
     let h1 = document.getElementsByTagName("h1")[0];
     // class="cursor_item" 지정
     let cursor_item = document.getElementsByClassName("cursor_item")[0];
     // mouseFunc정의
     function mouseFunc(event) {
       // h1에 마우스 x좌표, y좌표 출력
       h1.innerText = "x: " + event.clientX + " y: " + event.clientY;
       // 객체의 위치를 커서로 이동
       cursor_item.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
       // console.log(event.clientX, event.clientY);
     }
     // 이벤트 리스너 선언
     window.addEventListener("mousemove", mouseFunc, false);
   };
   function callback() {
      console.log("계속 실행됩니다.");
      window.requestAnimationFrame(callback);
  }
  let mouseX = 0;
let mouseY = 0;
let speed = 0.05;

function loop() {
    mouseX += (x - mouseX) * speed;
    mouseY += (y - mouseY) * speed;

    cursor_item.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    window.requestAnimationFrame(loop);
}
}) */
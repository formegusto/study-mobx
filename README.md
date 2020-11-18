# 오류 기록
1. mobx v6 이후 부터는 decorate() 가 없어졌다.
    - makeObservable, makeAutoObservable 를 사용한다.
    - mobx v5 로 갈아버리는 것도 괜찮지만 mobx-react의 observer와 연동이 안된다.
    - (https://stackoverflow.com/questions/64437377/not-able-to-import-decorate-from-mobx)
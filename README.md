babel.config.json이 존재하고 내용이 적혀 있으면 webpack.config.js에 option을 적으면 안됨. (webpack.config.js 주석 참조)

만약 babel.config.json 파일이 존재하지 않으면 webpack.config.js에 적을 것.

## babel-loader

기본적인 트랜스파일링 뿐만 아니라 루트에 babel.config.json을 두면 찾아서 적용함. (npx webpack)

## "@babel/preset-react"

JSX를 사용하게 해줌. (runtime이 automatic이여야 자동으로 React를 가져와서 import 시켜줌. default는 classic.)

babel에서 jsx 변환을 시킬 경우, tsconfig의 jsx 설정은 preserve여야 합니다.(JSX 보존)

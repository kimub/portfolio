import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';

export default function Experience() {
  return (
    <section id='experience' className='wrapper px-8 py-24'>
      <SectionTitle title='Experience' />
      <div className='mt-28'>
        <h3 className='text-2xl font-bold'>플렉스데이</h3>
        <table className='text mt-8 font-semibold'>
          <tbody>
            <tr>
              <td className='w-20 text-primary'>Position.</td>
              <td>Frontend Developer</td>
            </tr>
            <tr>
              <td className='w-20 text-primary'>Period.</td>
              <td>2023.02~2023.05</td>
            </tr>
            <tr>
              <td className='w-20 align-top text-primary'>Projects.</td>
              <td>
                모바일 선물하기 서비스(어드민),
                <br />
                모바일 식권서비스(어드민),
                <br />
                키오스크 서비스(퍼블리싱)
              </td>
            </tr>
            <tr>
              <td className='w-20 text-primary'>Skills.</td>
              <td>JavaScript, React, React-Query, Git, Jira, Slack</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-16 space-y-12'>
        <ProjectItem
          title='모바일 선물하기 서비스 어드민 개선(23.02~03)'
          description={[
            '상태를 더 효율적으로 관리하기 위해 전역 상태와 서버 상태를 분리 데이터 요청을 캐시하여 데이터 요청을 줄이기 위해 React-Query를 사용하였습니다.',
            'Supense와 ErrorBoundary를 사용하여 컴포넌트 내부에 로딩, 에러 코드들을 분리하여 컴포넌트를 읽기 쉽게 만들었습니다.',
          ]}
        />
        <ProjectItem
          title='모바일 식권 서비스 가맹점, 어드민 (23.03~05)'
          description={[
            '대시보드 페이지 퍼블리싱 및 매출, 주문 수, 신규 가입자 수 등의 데이터를 시각화하였습니다.',
            'Supense와 ErrorBoundary를 사용하여 컴포넌트 내부에 로딩, 에러 코드들을 분리하여 컴포넌트를 읽기 쉽게 만들었습니다.',
            '커스텀 훅을 사용하여 비즈니스 로직과 뷰 로직을 분리하였습니다.',
            '어드민 메인 페이지에서 세션스토리지에 있는 토큰을 체크하여 올바르지 않은 경우 로그인 화면으로 보내는 로직은 어드민 메인 페이지 컴포넌트의 뷰 로직과는 관계가 없다고 생각하여 해당 로직을 고차 컴포넌트로 구현하여 로직을 분리해주었습니다.',
          ]}
        />
        <ProjectItem
          title='키오스크 서비스 가맹점 퍼블리싱 (23.04~05)'
          description={['모바일, 태블릿, 키오스크 반응형 퍼블리싱 업무 수행']}
        />
      </div>
    </section>
  );
}

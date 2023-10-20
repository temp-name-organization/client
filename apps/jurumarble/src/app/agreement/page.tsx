'use client';

import { SideButtonHeader } from 'components/SideButtonHeader';
import { getClassNames } from 'lib/styles/getClassNames';
import { useRouter } from 'next/navigation';
import { SvgIcX } from 'src/assets/icons/components';

import styles from './page.module.css';

function AgreementPage() {
  const cx = getClassNames(styles);
  const router = useRouter();
  /**
   * @TODO 서버 컴포넌트에서 router 대신 사용할 수 있는 것을 찾아서 대체
   */

  return (
    <>
      <SideButtonHeader
        rightButton={
          <button
            className={cx('close-button')}
            onClick={() => {
              router.back();
            }}
          >
            <SvgIcX width={24} height={24} />
          </button>
        }
      >
        이용약관
      </SideButtonHeader>
      <article className={cx('container', 'body_long03')}>
        제 1조 목적 <br />
        제 2조 용어의 정의 <br />
        제 3조 약관 등의 명시와 설명 및 개정 <br />
        제 4조 서비스의 제공 <br />
        제 5조 서비스 이용계약의 성립 제 6조 개인정보의 관리 및 보호 <br />
        제 7조 서비스 이용계약의 종료
        <br />
        제 8조 회원에 대한 통지
        <br />
        제 9조 저작권의 귀속
        <br />
        제 10조 게시물의 삭제 및 접근 차단
        <br />
        제 11조 광고의 게재 및 발신
        <br />
        제 12조 금지행위
        <br />
        제 13조 서비스 제공 중단 및 서비스 이용계약의 해지
        <br />
        제 14조 재판권 및 준거법
        <br />
        제 15조 기타
        <br />
        제 16조 위치정보 이용약관
        <br />
        <ol>
          <li>
            제 1조 목적 본 약관은 주루마블에서 제공하는 서비스의 이용조건과
            이용절차를 포함한 주루마블 및 회원의 권리와 책임에 관한 기본적인
            사항을 규정함을 목적으로 합니다.
          </li>
          <li>
            제 2조 용어의 정의 이 약관에서 사용하는 용어의 정의는 다음과
            같습니다. “서비스”란, 주루마블이 제공하는 모든 서비스 및 기능을
            말합니다. “이용자”란, 이 약관에 따라 서비스를 이용하는 회원 및
            비회원을 말합니다. “회원”이란, 서비스에 회원등록을 하고 서비스를
            이용하는 자를 말합니다. “비회원”이란, 서비스에 회원등록을 하지 않고
            서비스를 이용하는 자를 말합니다. “게시물”이란, 서비스에 게재된
            문자,사진,영상,첨부파일,광고 등을 말합니다. “커뮤니티”란, 게시물을
            게시할 수 있는 공간을 말합니다. “이용 기록”이란, 이용자가 서비스를
            이용하면서 직접 생성한 게시물 등을 말합니다. “로그 기록”이란,
            이용자가 서비스를 이용하면서 자동으로 생성된 IP 주소, 접속 시간 등을
            말합니다. “계정”이란, 이용약관을 통해 생성된 회원의 고유 아이디와
            이에 수반하는 정보를 말합니다. “서비스 내부 알림 수단”이란, 팝업,
            알림, 내 정보 메뉴 등을 말합니다. “관련법”이란, 정보통신망 이용촉진
            및 정보보호 등에 관한 법률, 개인정보보호법 등 관련 있는 국내 법령을
            말합니다. 제 1항에서 정의되지 않은 이 약관 내 용어의 의미는 일반적인
            이용관행에 의합니다.
          </li>
          <li>
            제 3조 약관 등의 명시와 설명 및 개정 주루마블은 이 약관을 초기화면,
            회원가입 화면 및 푸터 등에 게시하거나 기타의 방법으로 회원에게
            공지합니다. 주루마블은 필요하다고 인정되는 경우, 관련법을 위배하지
            않는 범위에서 이 약관을 개정할 수 있습니다. 주루마블은 약관을 개정할
            경우, 적용 일자, 및 개정 사유를 명시하여 현행약관과 함께 개정약관
            적용 일자 7일 전부터 “알림”을 통해 공지합니다. 회원은 개정약관에
            동의하지 않을 경우, 회원 탈퇴 등의 방법으로 거부 의사를 표시할 수
            있습니다. 단, 주루마블이 약관 개정 시 “개정 약관의 적용 일자까지
            회원이 거부 의사를 표시하지 아니할 경우 약관의 개정에 동의한 것으로
            간주한다”는 내용을 고지하였음에도 불구하고 회원이 약관 개정에 대한
            거부 의사를 표시하지 아니하면, 주루마블은 적용 일자부로 개정 약관에
            동의한 것으로 간주합니다.
          </li>
          <li>제 4조 서비스의 제공</li>
          <li>
            제 5조 서비스 이용계약의 성립 주루마블 서비스를 이용하고자 하는 자가
            이 약관, 개인정보 수집 및 이용 동의에 동의를 하고 회원가입을
            함으로써 체결됩니다. 주루마블은 서비스를 이용하고자 하는 자가
            이용약관에 동의를 함으로써 이용자를 14세 이상으로 간주합니다.
          </li>
          <li>
            제 6조 개인정보의 관리 및 보호 주루마블은 관계 법령이 정하는 바에
            따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및
            이용에 관해서는 관련 법령 및 주루마블의 개인정보 처리방침에
            따릅니다.
          </li>
          <li>
            제 7조 서비스 이용계약의 종료 회원은 언제든지 서비스 내부의
            “탈퇴하기” 버튼을 누르는 방법으로 탈퇴를 요청할 수 있습니다. 탈퇴
            처리가 완료 되더라도, 회원이 게시한 게시물은 삭제되지 않습니다.
            주루마블은 제 12조(금지행위)에 해당하는 행위를 하거나 해당하는
            행위를 했던 이력이 있을 경우 제 13조(서비스 제공 중단 및 이용계약의
            해지)에 따라 서비스 제공을 중단하거나 서비스 이용계약을 해지할 수
            있습니다.
          </li>
          <li>
            제 8조 회원에 대한 통지 주루마블이 회원에 대한 통지가 필요한 경우,
            서비스 내부 알림 수단을 이용할 수 있습니다. 주루마블이 회원에게 “30
            일 이내에 의사를 표시하지 아니할 경우 동의한 경우로 간주한다”는
            내용을 고지하였음에도 불구하고 회원이 의사를 표시하지 아니하면,
            주루마블은 통지 내용에 동의한 것으로 간주합니다.
          </li>
          <li>
            제 9조 저작권의 귀속 주루마블이 작성한 게시물에 대한 권리는
            주루마블에 귀속되며, 회원이 작성한 게시물에 대한 권리는 회원에게
            귀속됩니다.
          </li>
          <li>
            제 10조 게시물의 삭제 및 접근 차단 누구든지 게시물로 인해 사생활
            침해나 명예훼손 등 권리가 침해된 경우 주루마블 내 신고하기 기능을
            통해 주루마블에 알릴 수 있습니다. 이 때 주루마블은 해당 게시물을
            삭제할 수 있으며, 해당 게시물의 권한을 가진 회원을 조치할 수
            있습니다. 주루마블이 제 1항에 따라 회원의 게시물을 삭제하거나 접근을
            차단하는 경우 해당 게시물을 작성한 회원에게 그 사실을 통지합니다.
          </li>
          <li>
            제 11조 광고의 게재 및 발신 주루마블은 서비스의 제공을 위해 서비스
            내부에 광고를 게재할 수 있습니다. 주루마블은 이용자의 이용 기록을
            활용한 광고를 게재할 수 있습니다.
          </li>
          <li>
            제 12조 금지행위 이용자는 다음과 같은 행위를 해서는 안됩니다. 일반
            금지 행위 국제평화, 국제 질서 및 국제 간의 우의를 현저히 해할 우려가
            있는 행위 헌법에 위배되거나 국가의 존립을 해하는 행위 범죄 기타
            법령에 위반되는 행위 사회 통념상 일반인의 성욕을 자극하여 성적
            흥분을 유발하고 정상적인 성적 수치심을 해하여 성적 도위관념에 반하는
            행위 폭력성, 잔혹성, 혐오성 등이 심각한 행위 사회통합 및 사회질서를
            저해하는 행위 타인의 권리를 침해하는 행위 자살얘방법에 반하는 자살
            및 자해 유발정보 유통 행위 의료법, 약사법, 관세법, 전파법,
            외국환거래법 등 법률에 반하는 거래 불가능 품목 거래 행위 성적
            도의관념에 반하는 행위 정보통신망 이용촉진 및 정보보호 등에 관한
            법률에 따른 유해정보 유통 행위 전기통신사업법에 따른 불법촬영물 등
            유통 행위 청소년보호법에 따른 청소년유해매체물 유통 행위
            방송통신심의위원회의 정보통신에 관한 심의규정에 따른 심의기준 성적
            도의관념에 반하는 행위 신체 부위 또는 성적 행위를 노골적으로 표현
            또는 묘사하는 행위 자극적이고 혐오스런 성적 표현 및 비속어,은어 사용
            행위 불건전 만남, 유흥, 성매매 등 내용 유통 행위 홍보/판매 행위 이
            약관이 적용되는 서비스 및 기능과 동일하거나 유사한 서비스 및 기능에
            대한 직.간접적 홍보 행위 서비스, 브랜드, 사이트, 애플리케이션,
            사업체, 단체 등을 알리거나 가입, 방문을 유도하기 위한 직.간접적 홍보
            행위 비상업적 목적의 일상 생활과 관련된 중고 품목 이외의 품목 등
            홍보 및 판매 행위 정치, 사회 관련 금지 행위 특정 정당, 언론,
            시민단체, 등 정치 관련 언급하는 행위 개인정보 또는 계정 기만, 침해,
            공유 행위 개인정보를 허위, 누락, 오기, 도용하여 작성하는 행위 타인의
            개인정보 및 계정을 수집, 저장, 공개, 이용하는 행위 자신과 타인의
            개인정보를 제 3자에게 공개, 양도, 승계하는 행위 다중 계정을 생성 및
            이용하는 행위 자신의 계정을 이용하여 타인의 요청을 이행하는 행위
            시스템 부정행위 주루마블의 모든 재산에 대한 침해 행위 API 직접 호출,
            유저 에이전트 조작, 패킷 캡처, 비정상적인 반복 조회 및 요청 등
            허가하지 않은 방식의 서비스 이용 행위 프로그램, 스크립트, 봇을
            이용한 서비스 접근 등 사람이 아닌 컴퓨팅 시스템을 통한 서비스 접근
            행위 업무 방해 행위 서비스 관리자 또는 이에 준하는 자격을 허가 없이
            취득하여 권한을 행사하거나, 사칭하여 허위의 정보를 발설하는 행위
            타인의 명예를 훼손하거나 기타 업무를 방해하는 행위 서비스 내부 정보
            일체를 허가 없이 이용, 변조, 삭제 및 외부로 유출하는 행위 기타
            현행법에 어긋나거나 부적절하다고 판단되는 행위 이용자는 제 1항에
            기재된 내용에 반하는 행위를 해서는 안됩니다. 이용자가 제 1항에
            해당하는 행위를 할 경우, 주루마블은 이 약관 제 13조(서비스의 제공 및
            서비스 이용계약의 해지)에 따라 서비스 제공을 중단하거나 서비스
            이용계약을 해지할 수 있습니다.
          </li>
          <li>
            제 13조 서비스 제공 중단 및 서비스 이용계약의 해지 이용자가 이
            약관에서 이 조항 적용이 명시된 금지행위 및 이에 준하는 행위를 할
            경우, 주루마블은 서비스 보호를 위해 다음과 같은 조치를 최대
            영구적으로 취할 수 있습니다. 해당 조치는 서비스 보호를 위해
            불가피하다고 판단될 경우, 주루마블이 제공하는 모든 서비스의
            동일인으로 확인되는 모든 계정에 일괄적으로 적용될 수 있습니다.
            회원의 서비스 이용 권한, 자격 제한 및 회수 회원과 체결괸 이용계약의
            해지 회원가입 거부 회원의 게시물, 닉네임, 프로필 사진, 이용기록을
            삭제, 중단, 수정 그 외 서비스의 정상적인 운영을 위해 주루마블이
            필요하다고 판단되는 조치 주루마블은 서비스 제공 중단 및 서비스
            이용계약 해지 시, 서비스 내부 알림 수단을 통하여 그 사실을 사유와
            함께 개별 통지합니다. 주루마블은 이용자의 귀책 사유로 인한 서비스
            제공 및 서비스 이용계약의 해지로 인해 발생한 피해에 대해 주루마블의
            고의 또는 중대한 과실이 없는 한 어떠한 책임도 지지 않습니다.
          </li>
          <li>
            제 14조 재판권 및 준거법 주루마블과 이용자 간에 발생한 분쟁에 관한
            소송은 민사소송법상의 관할 법원에 제소합니다. 주루마블과 이용자 간에
            제기된 소송에는 대한민국 법을 준거법으로 합니다.
          </li>
          <li>
            제 15조 기타 이 약관은 2023년 9월 4일 개정되었습니다. 이 약관에서
            정하지 아니한 사항과 이 약관에 해석에 관여하는 관련법 또는 관례에
            따릅니다.
          </li>
          <li>
            제 16조 위치정보 이용약관 주루마블 내에 사용자의 위치정보를 필요로
            하는 서비스 이용시 카카오맵의 위치정보 이용약관에 따릅니다.
          </li>
        </ol>
      </article>
    </>
  );
}

export default AgreementPage;

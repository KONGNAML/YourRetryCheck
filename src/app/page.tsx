'use client'

import { Analytics } from "@vercel/analytics/react"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const copyURL = () => {
    let currentUrl = window.document.location.href;
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = currentUrl;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);

    alert("링크가 복사되었습니다.");
};

function simulateAdmissions(모집인원: any, 예비번호: any, 입학률: any, 시도횟수: any) {
    let results = 0;
    let success = 0;

    for (let i = 0; i < 시도횟수; i++) {
        let num = 1;
        let totalStudents = 0;

        while (totalStudents < 모집인원) {
            // 입학률에 따라 학생 추가
            if (Math.random() <= 입학률) {
                totalStudents++;
            }
            num++;
        }

        // 성공 조건 체크
        if (num >= 예비번호) {
            success++;
        }
    }

    // 성공률 계산
    results = (success / 시도횟수) * 100

    return results.toFixed(1);
}

function getText(number: number): string {
    if (number >= 0 && number < 30) {
        return successRate0To30[Math.floor(Math.random() * successRate0To30.length)]
    }
    if (number >= 30 && number < 50) {
        return successRate30To50[Math.floor(Math.random() * successRate30To50.length)]
    }
    if (number >= 50 && number < 80) {
        return successRate50To80[Math.floor(Math.random() * successRate50To80.length)]
    }
    if (number >= 80 && number <= 100) {
        return successRate80To100[Math.floor(Math.random() * successRate80To100.length)]
    }
    return "꿈도 희망도.. 무엇도 보이지..(요?)"
}

const successRate80To100 = [
    "이 정도면 합격 전용 열차 탑승 완료!\n종착지는 성공! 🚄🎓",
    "합격의 기운이 물씬~ \n이제 기분 좋게 점 찍고 갈 시간이에요! 🖌️✨",
    "이건 뭐… \n시험장이 아니라 무대에 오르는 느낌이겠는데요? 🏆🔥",
    "축하 미리 준비할게요. \n합격 파티 날짜 정해주세요! 🎉🍰",
    "합격의 문이 활짝 열렸습니다! \n자신감을 가지고 들어가세요! 🚪✨",
    "이 정도면 하늘도 축복하는 합격입니다! \n축하드려요! ☀️🎓",
    "이제부터는 즐길 시간이에요! \n합격은 이미 확정! 🎉🌟",
    "준비한 만큼 빛이 나는 순간입니다! \n자랑스러워하세요! 💎🔥",
    "모든 노력의 결실이 드디어! \n성공이 눈앞입니다! 🌈🎓",
    "마치 영화의 주인공처럼! \n합격의 길만 걸으세요! 🎬✨",
    "오늘의 주인공은 바로 당신입니다! \n축하드립니다! 🌟🎊",
    "최고의 성과, 최고의 결과! \n환상적인 마무리입니다! 🏆✨",
    "합격의 열기가 느껴집니다! \n앞으로도 화이팅! 🔥🎓",
    "이제는 승리의 환호성을 올릴 때! \n축하드려요! 📣🎉",
    "당신의 노력은 언제나 옳았습니다! \n합격으로 증명됐어요! 💪🌟",
    "모든 것이 완벽하게 맞아떨어졌습니다! \n축하드려요! 🎯✨",
    "오늘의 당신은 별보다 빛납니다! \n합격을 축하드려요! 🌟🌙",
    "꿈꿔온 모든 것이 현실로! \n성공의 주인공이 되셨습니다! 🏆🌟",
    "당신의 이름이 빛나는 순간입니다! \n축하드려요! ✨🎓",
    "이제는 합격의 기쁨을 만끽하세요! \n정말 수고하셨습니다! 🎉💐"
];
const successRate50To80 = [
    "조금 불안해도 괜찮아요! \n떨어질까 걱정 말고 올라갈 준비하세요! 🚀🌟",
    "확신은 없지만 가능성은 충분! \n조금만 더 힘내봐요, 해낼 수 있어요! 💪🌈",
    "이 정도면 살짝 긴장 타도 괜찮은 수준. \n근데 아직 게임 끝난 거 아니죠? 마지막까지 파이팅! 🏋️‍♀️✨",
    "행운의 여신이 슬며시 다가오는 중... \n준비만 잘하면 꼭 잡을 거예요! 🍀✨",
    "이제 한 걸음만 더 나아가면 됩니다! \n힘내세요! 💪✨",
    "모든 것은 준비된 만큼 이루어질 겁니다! \n희망을 가지세요! 🌟🌈",
    "합격의 문턱까지 왔습니다. \n마지막 힘을 내봐요! 🚪🔥",
    "지금은 중요한 순간! \n끝까지 집중하세요! 🎯✨",
    "운명의 순간은 다가오고 있습니다. \n좋은 결과를 기대합니다! 🌠🌟",
    "아직 기회는 남아 있습니다! \n절대 포기하지 마세요! 🏋️‍♂️✨",
    "희망은 언제나 남아 있습니다! \n힘내세요! 🌟🚀",
    "조금 더 노력하면 합격은 보장됩니다! \n끝까지 화이팅! 💪✨",
    "긴장되는 순간이지만, 당신의 노력은 헛되지 않을 겁니다! 🙌🌟",
    "이제는 집중력을 최대한 발휘할 시간입니다! 🎯💪",
    "성공은 용기를 가진 자의 것입니다! \n자신을 믿으세요! 🌟✨",
    "마지막 관문이지만, 충분히 해낼 수 있습니다! 🚪🌠",
    "아직 끝난 게 아닙니다! \n포기하지 말고 전진하세요! 🚀🌟",
    "희망이 조금이라도 있다면, 그 길을 믿으세요! 🌈✨",
    "조금만 더 노력하면, 모든 게 달라질 겁니다! 💪🔥",
    "당신의 잠재력을 믿으세요! \n성공은 당신의 것입니다! 🌟🎓"
];
const successRate30To50 = [
    "흔들리는 마음은 잠시 접어두고, \n더 높이 뛸 준비 시작! 🚀💥",
    "결과가 어떻든, \n지금까지 달려온 당신이 이미 대단한 거예요. \n끝까지 포기하지 말아요! ✨💪",
    "확률은 낮아도, 노력은 배신하지 않는 법! \n준비한 만큼 빛을 발할 거예요! 🌟🔥",
    "지금은 긴장을 풀고 최선을 다하는 게 정답. \n결과는 뒤따라올 거예요! 🙏🌈",
    "조금 부족하더라도, 다음 기회는 반드시 옵니다! 🌟🔥",
    "오늘의 경험이 내일의 성공을 만듭니다. \n끝까지 화이팅! 💪✨",
    "결과가 어떻든, 지금까지의 노력은 반드시 빛날 겁니다! 🌟🔥",
    "포기하지 않으면 기회는 언제나 있습니다! 🚀🌠",
    "지금의 어려움은 미래의 성공을 위한 초석입니다! 🌈✨",
    "성공은 노력의 집합체입니다. \n끝까지 밀어붙이세요! 🔥💪",
    "희망을 놓지 않으면, 모든 것이 가능합니다! 🌟🌈",
    "지금은 어려워 보일지 몰라도, 한 걸음 더 나아가면 됩니다! 🚶‍♂️✨",
    "어려운 순간일수록 더 단단해질 수 있습니다. 💎💪",
    "결과보다는 과정에 집중하세요! \n성공은 뒤따라옵니다! 🌟✨",
    "힘든 순간이지만, 모든 것이 잘될 겁니다. \n믿어보세요! 🙏🌠",
    "노력은 결코 헛되지 않습니다. \n조금만 더 힘내봐요! 💪🔥",
    "포기하지 않는 한, 실패는 없습니다. \n끝까지 도전하세요! 🚀✨",
    "힘들지만 이겨낼 수 있습니다. \n당신은 강하니까요! 💪🔥",
    "결과가 어떻든, 지금의 도전이 미래의 밑거름이 될 겁니다! 🌱🌟",
    "조금씩 나아가다 보면, 어느새 도달해 있을 겁니다! 🚶‍♀️✨"
];
const successRate0To30 = [
    "이건 실패가 아니라, \n더 멋진 도전을 위한 예열! \n더 뜨겁게 준비해요! 🔥🎯",
    "재수라니, 이건 그냥 ‘승부 연장전’일 뿐이죠! \n더 강해져서 돌아올 거예요! 💪🕶️",
    "합격이 안 보인다고요? \n그럼 우리가 길을 만들어가야죠! \n다음엔 반드시 성공! 🛤️✨",
    "인생은 긴 여정이에요. \n한 걸음 쉬어가는 것도 멋진 선택! \n다시 시작합시다! 🌿🌻",
    "지금의 실패는 미래의 큰 성공을 위한 밑거름입니다! 🌟🔥",
    "조금 더 준비하고, 더 강하게 돌아오세요! 💪✨",
    "실패는 단지 성공으로 가는 하나의 과정일 뿐입니다! 🔄🌟",
    "넘어져도 괜찮습니다. 다시 일어나면 됩니다! 🏋️‍♀️🔥",
    "이번 도전이 아니더라도, 기회는 또 올 겁니다! 🚪✨",
    "포기하지 않는 한, 다음은 반드시 성공할 것입니다! 💪🌈",
    "인생은 한 번의 시험으로 끝나지 않습니다. \n계속 도전하세요! 🌟✨",
    "다음에는 더 높은 곳에서 시작할 수 있을 겁니다! 🚀🔥",
    "오늘의 실패는 내일의 성공을 위한 발판입니다. 🌈✨",
    "포기하지 않고 끝까지 노력하는 당신이 대단합니다! 🙌💪",
    "이번에는 놓쳤더라도, 다음에는 꼭 잡을 수 있을 겁니다! 🔥🌠",
    "실패를 두려워하지 마세요. \n그것이 진정한 도전의 의미입니다! 🌟✨",
    "모든 도전은 우리를 더 강하게 만듭니다! 💪🔥",
    "다음에는 더 좋은 결과를 기대할 수 있습니다! 🌈✨",
    "실패는 배움의 기회입니다. \n더 나아갈 준비를 하세요! 🙌🔥",
    "오늘의 경험이 당신을 더 강하게 만들 것입니다! 🌟💪"
];


export default function Home() {

    const [result, setResult] = useState<any>(false);
    const [max, setMax] = useState<number>();
    const [lastNumber, setLastNumber] = useState<number>();
    const [mynumber, setMynumber] = useState<number>();
    const [percentage, setPercent] = useState<any>();

    return (
        <main className="flex items-center justify-center min-h-screen bg-neutral-900 overflow-hidden">
            <section className="bsection">
                <span className="custom-span"></span>
                <span className="custom-span"></span>
                <span className="custom-span"></span>
                <span className="custom-span"></span>
                <span className="custom-span"></span>
                <span className="custom-span"></span>
                <span className="custom-span"></span>
                <span className="custom-span"></span>
                <span className="custom-span"></span>
                <span className="custom-span"></span>
            </section>
            <div className="bg-yellow-500 p-6 sm:p-8 rounded-lg w-full max-w-[24rem] text-center shadow-2xl">
                <div className="mb-6 relative">
                    {/* 위쪽 아이콘 */}
                    <button onClick={copyURL}>
                        <img
                            src="/url.png"
                            alt="url"
                            className="w-6 h-6 absolute top-0 right-0"
                            style={result ? {} : {display: "none"}}
                        />
                    </button>

                    {/* 아래쪽 아이콘 */}
                    <img
                        src="/school.png"
                        alt="school"
                        className="w-12 h-12 mx-auto relative"
                    />
                </div>
                <div className="space-y-4" style={result ? {display: "none"} : {}}>
                    <input
                        value={max}
                        onChange={(e) => setMax(Number(e.target.value))}
                        type="number"
                        placeholder="모집 인원"
                        className="text-neutral-900 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <input
                        value={lastNumber}
                        onChange={(e) => setLastNumber(Number(e.target.value))}
                        type="number"
                        placeholder="최종 합격 번호"
                        className="text-neutral-900 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <input
                        value={mynumber}
                        onChange={(e) => setMynumber(Number(e.target.value))}
                        type="number"
                        placeholder="자신의 예비 번호"
                        className="text-neutral-900 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>
                <div className="" style={result ? {} : {display: "none"}}>
                    <p>예상 합격률 : {percentage}%</p>
                    <br/>
                    <p className="whitespace-pre-wrap">{getText(percentage)}</p>
                </div>
                <button
                    onClick={() => {
                        if (mynumber && lastNumber && max) {
                            if (mynumber < max || lastNumber < max) {
                                return alert("예비 번호와 최종 합격 번호는 모집인원과 같거나 커야 합니다");
                            }
                            const rate = max / lastNumber;
                            setPercent(simulateAdmissions(max, mynumber, rate, 10000));
                            setResult(!result);
                        } else {
                            return alert("입력란을 모두 채워주세요");
                        }
                    }}
                    className="text-neutral-900 bg-neutral-200 rounded-md w-max p-2 mt-6 hover:bg-neutral-300"
                >
                    <p style={result ? {} : {display: "none"}}>돌아가기</p>
                    <p style={result ? {display: "none"} : {}}>확인하기</p>
                </button>
            </div>
        </main>
    );
}
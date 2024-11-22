export const shortTerm = "short_term";
export const longTerm = "long_term";

const categoryDict = [
  { kor: "여행", eng: "travel" },
  { kor: "취미/문화", eng: "hobby_culture" },
  { kor: "건강/운동", eng: "health_exercise" },
  { kor: "소비/저축/기부", eng: "spending_saving_donating" },
  { kor: "자기계발", eng: "self_development" },
  { kor: "기타", eng: "others" },
  { kor: "커리어", eng: "career" },
  { kor: "가족/친구", eng: "family_friends" },
];

export const categoryList = categoryDict.map((item) => item.kor);

export const translateEng = (kor) =>
  categoryDict.find((item) => item.kor === kor).eng;

// GoalList.js
export const transformGoals = (period, inputs) => {
  if (period === shortTerm) {
    const { month, value } = inputs[0]; // 첫 번째 항목의 month와 value를 사용
    const contents = inputs.map((item) => item.value); // 모든 value를 contents로 변환
    return { month, contents };
  } else {
    const { year, value } = inputs[0]; // 첫 번째 항목의 year와 value를 사용
    const contents = inputs.map((item) => item.value); // 모든 value를 contents로 변환
    return { year, contents };
  }
};

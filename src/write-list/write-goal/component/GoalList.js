import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { shortTerm, transformGoals } from "../../definition/definition";

const GoalList = ({ request, setGoals, loading, setLoading }) => {
  const period = request.period;
  const duration_years = request.duration_years || 0;

  return (
    <Wrapper>
      {period === "short_term"
        ? Array.from({ length: 12 }, (_, idx) => (
            <DetailGoal
              key={idx}
              period={period}
              month={idx + 1}
              setGoals={setGoals}
              loading={loading}
              setLoading={setLoading}
            />
          ))
        : Array.from({ length: duration_years }, (_, idx) => (
            <DetailGoal
              key={idx}
              period={period}
              year={idx + 1}
              setGoals={setGoals}
              loading={loading}
              setLoading={setLoading}
            />
          ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 17px;
`;

const DetailGoal = ({ period, month, year, setGoals, loading, setLoading }) => {
  const [inputs, setInputs] = useState([]);
  const when = period === shortTerm ? `${month}개월` : `${year}년`;
  const defaultInput =
    period === shortTerm
      ? { month: month, value: "", readOnly: false }
      : { year: year, value: "", readOnly: false };

  // 입력 필드 추가 함수
  const handleAddInput = () => setInputs([...inputs, defaultInput]);

  // 입력 필드 삭제 함수
  const deleteInput = (targetIdx) =>
    setInputs(inputs.filter((_, idx) => idx !== targetIdx));

  // 입력 필드 값 변경 함수
  const handleInputChange = (idx, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[idx] = { ...updatedInputs[idx], value }; // value만 업데이트
    setInputs(updatedInputs);
  };

  // 입력 필드 편집/작성 완료 변경 함수
  const toggleReadOnly = (idx) => {
    const updatedInputs = [...inputs];
    updatedInputs[idx] = {
      ...updatedInputs[idx],
      readOnly: !updatedInputs[idx].readOnly,
    }; // readOnly 토글
    setInputs(updatedInputs);
  };

  useEffect(() => {
    if (!inputs.length || !loading) return;
    const dataToSave = transformGoals(period, inputs);
    console.log("dataToSave", dataToSave);

    setGoals((prev) => [...prev, dataToSave]);
    setLoading(false);
  }, [loading]);

  return (
    <Wrapper1>
      <Title>
        {when}
        <AddGoal src="goal/add-goal.svg" onClick={handleAddInput} />
      </Title>
      {inputs?.map((input, idx) => (
        <Line key={idx}>
          <Checkbox />
          <Input
            type="text"
            value={input.value}
            readOnly={input.readOnly}
            onChange={(e) => handleInputChange(idx, e.target.value)}
            className={input.readOnly ? "" : "edit"}
          />
          <Button
            src={`goal/${input.readOnly ? "edit" : "complete"}-goal.svg`}
            onClick={() => toggleReadOnly(idx)}
          />
          <Button src="goal/delete-goal.svg" onClick={() => deleteInput(idx)} />
        </Line>
      ))}
    </Wrapper1>
  );
};

export default GoalList;

const Wrapper1 = styled.div`
  width: calc(100% - 20px);
  height: fit-content;
  display: flex;
  padding: 14px 10px 17px 10px;
  flex-direction: column;
  gap: 22px;
  border-radius: 5px;
  border: 1px solid #e6f6eb;
  background: #e6f6eb;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
`;

const AddGoal = styled.img`
  width: 14px;
  height: 14px;
`;

const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #979797;
  border-radius: 3px;
  background-color: #fbfefd;
  margin-right: 8px;
`;

const Input = styled.input`
  width: 243px;
  height: 18px;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-family: "YiSunShinDotumM";
  &.edit {
    border-bottom: 1px solid #6fbc89;
  }
`;

const Button = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

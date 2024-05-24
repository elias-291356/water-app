import React from "react";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import {
  StyledWrapperMyDaylyNormaModal,
  StyledDaylyNormaForm,
  StyledGenderList,
  StyledGenderWrap,
  StyledDescr,
  StyledGenderLable,
  StyledWrapLabelGender,
  StyledWrapperGenderWeightTime,
  StyledWrapCountWater,
  StyledInput,
  StyledReactFormButton,
  Styledlegend,
  StyledFormula,
  StyledForGender,
  StyledWaterLabel,
  StyledCalculateLabel,
  StyledSpanCountWater,
} from "./DailyNormaStyled";
import { useState } from "react";

const DailyNorma = ({ show, close }) => {
  const [requiredWater, setRequiredWater] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let countWater;
    const weight = parseInt(data.weight) || 0;
    const time = parseInt(data.usedTime) || 0;

    if (data.gender === "woman") {
      countWater = weight * 0.03 + time * 0.4;
    } else if (data.gender === "man") {
      countWater = weight * 0.04 + time * 0.6;
    } else {
      countWater = 0;
    }

    setRequiredWater(countWater.toFixed(2));
    console.log(data);
    reset();
    console.log(errors);
  };
  return (
    <Modal show={show} close={close} title="My daily norma">
      <StyledWrapperMyDaylyNormaModal>
        <StyledGenderWrap>
          <StyledGenderList>
            <StyledForGender>For girl:</StyledForGender>
            <StyledFormula>V=(M*0,03) + (T*0,4)</StyledFormula>
          </StyledGenderList>
          <StyledGenderList>
            <StyledForGender>For man:</StyledForGender>
            <StyledFormula>V=(M*0,04) + (T*0,6)</StyledFormula>
          </StyledGenderList>
        </StyledGenderWrap>
        <StyledDescr>
          V is the volume of the water norm in liters per day, M is your body
          weight, T is the time of active sports, or another type of activity
          commensurate in terms of loads (in the absence of these, you must set
          0)
        </StyledDescr>
        <StyledDaylyNormaForm onSubmit={handleSubmit(onSubmit)}>
          <StyledWrapperGenderWeightTime
            role="group"
            aria-labelledby="сalculate-rate"
          >
            <Styledlegend id="сalculate-rate">
              Calculate your rate:
            </Styledlegend>
            <StyledWrapLabelGender>
              <StyledGenderLable>
                <input
                  {...register("gender")}
                  type="radio"
                  value="woman"
                  required
                />
                For Woman
              </StyledGenderLable>
              <StyledGenderLable>
                <input
                  {...register("gender")}
                  type="radio"
                  value="man"
                  required
                />
                For Man
              </StyledGenderLable>
            </StyledWrapLabelGender>
            <StyledCalculateLabel>
              Your weight in kilograms:
              <StyledInput
                type="text"
                placeholder="0"
                {...register("weight")}
              />
            </StyledCalculateLabel>
            <StyledCalculateLabel>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
              <StyledInput
                type="text"
                placeholder="0"
                {...register("usedTime")}
              />
            </StyledCalculateLabel>
          </StyledWrapperGenderWeightTime>
          <p>
            The required amount of water in liters per day:{" "}
            <StyledSpanCountWater>{requiredWater} L</StyledSpanCountWater>
          </p>
          <StyledWrapCountWater>
            <StyledWaterLabel>
              Write down how much water you will drink:
              <StyledInput
                type="text"
                placeholder="0"
                {...register("countWater")}
              />
            </StyledWaterLabel>
          </StyledWrapCountWater>

          <StyledReactFormButton type="submit"> Save </StyledReactFormButton>
        </StyledDaylyNormaForm>
      </StyledWrapperMyDaylyNormaModal>
    </Modal>
  );
};

export default DailyNorma;

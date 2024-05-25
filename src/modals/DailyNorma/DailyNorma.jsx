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
import { useDispatch, useSelector } from "react-redux";
import { selectMyWaterNorma } from "../../redux/selectors";
import { setMyWaterNorma } from "../../redux/authReducer";
import { useState } from "react";
import { ErrorMessage } from "../../pages/SignupPage/SignupPageStyled";

const DailyNorma = ({ show, close }) => {
  const myWaterNorma = useSelector(selectMyWaterNorma);

  const [messageErrorweight, setMessageErrorweight] = useState("");
  const [messageErrorActiviti, setMessageErrorActiviti] = useState("");
  const [messageErrorUsedWater, setMessageErrorUsedWater] = useState("");
  const dispatch = useDispatch();

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

    dispatch(setMyWaterNorma(countWater.toFixed(2)));
    reset();
    console.log(errors);
  };

  // const validateWeight = (value) => {
  //   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // };
  const validateWeight = (value) => {
    const weightRegex = /^(1[01][0-9]|120|[2-9][0-9])$/;

    if (weightRegex.test(value)) {
      setMessageErrorweight("");
      return true;
    } else {
      setMessageErrorweight("Weight must be in range of 20 - 120");
      return false;
    }
  };
  const validActiveTime = (value) => {
    const weightRegex = /^[1-6]$/;

    if (weightRegex.test(value)) {
      setMessageErrorActiviti("");
      return true;
    } else {
      setMessageErrorActiviti("Choice from 1 to 6");
      return false;
    }
  };
  const validUsedWater = (value) => {
    const timeRegex = /^[1-12]$/;

    if (timeRegex.test(value)) {
      setMessageErrorUsedWater("");
      return true;
    } else {
      setMessageErrorUsedWater("Choice from 1 to 12");
      return false;
    }
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
              <ErrorMessage>{messageErrorweight}</ErrorMessage>
              <StyledInput
                type="text"
                placeholder="0"
                required
                {...register("weight", {
                  validate: validateWeight,
                })}
              />
            </StyledCalculateLabel>
            <StyledCalculateLabel>
              <ErrorMessage>{messageErrorActiviti}</ErrorMessage>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
              <StyledInput
                type="text"
                placeholder="0"
                required
                {...register("usedTime", { validate: validActiveTime })}
              />
            </StyledCalculateLabel>
          </StyledWrapperGenderWeightTime>
          <p>
            The required amount of water in liters per day:{" "}
            <StyledSpanCountWater>
              {myWaterNorma ? `${myWaterNorma} L` : ""}{" "}
            </StyledSpanCountWater>
          </p>
          <StyledWrapCountWater>
            <StyledWaterLabel>
              <ErrorMessage>{messageErrorUsedWater}</ErrorMessage>
              Write down how much water you will drink:
              <StyledInput
                type="text"
                placeholder="0"
                required
                {...register("countWater", { validate: validUsedWater })}
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

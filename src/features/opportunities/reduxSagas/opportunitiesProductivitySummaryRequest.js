import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* opportunitiesProductivitySummaryRequest() {
  try {
    const { data } = yield call(api.getOpportunitiesProductivitySummary);
    yield put(Creators.opportunitiesProductivitySummarySuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.opportunitiesProductivitySummaryFailure());
  }
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Term for this plan, which is the maximum cadence among all component prices
 */
export enum PlanPhaseDurationUnitEnum {
  Monthly = "monthly",
  Quarterly = "quarterly",
  Annual = "annual",
}

/**
 * A plan can optionally consist of plan phases, which represents a pricing configuration that's only active for the length of time specified by `duration` and `duration_unit`. All plans must have an evergreen phase, which is the last phase and active indefinitely.
 */
export class PlanPhase extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "discount" })
  discount: Record<string, any>;

  /**
   * How many terms of length `duration_unit` this phase is active for. If null, this phase is evergreen and active indefinitely
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: number;

  /**
   * Term for this plan, which is the maximum cadence among all component prices
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duration_unit" })
  durationUnit: PlanPhaseDurationUnitEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "minimum" })
  minimum: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Determines the ordering of the phase in a plan's lifecycle. 1 = first phase.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;
}

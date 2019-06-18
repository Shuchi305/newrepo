import * as DecodeUtils from "truffle-decode-utils";

export interface CalldataDecoding {
  kind: "function" | "constructor" | "fallback" | "unknown";
  class?: DecodeUtils.Types.ContractType; //included only if not unknown
  name?: string; //included only if function
  arguments?: AbiArgument[]; //included only if function or constructor
}

export interface EventDecoding {
  kind: "event" | "unknown";
  class?: DecodeUtils.Types.ContractType; //included only if event
  name?: string; //included only if event
  arguments?: AbiArgument[]; //included only if event
}

export interface AbiArgument {
  name?: string; //included if parameter is named
  value: DecodeUtils.Values.Result;
}

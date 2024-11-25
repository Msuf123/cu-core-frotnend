import { data } from "./actions/actions";

export interface Store{
  loading:{loading:boolean},
  error:{error:boolean},
  data:{backendData:data}
}
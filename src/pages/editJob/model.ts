import { IJob } from "../../utils/types"

export type IProps = {
    editJob: (arg:IJob)=>Promise<void>
}
<<<<<<< HEAD
import { PipelineProcessor, ProcessorType } from '../processor';
import Tabular from '../../tabular';
import { ArrayResponse } from './storageResponseToArray';
declare class ArrayToTabularTransformer extends PipelineProcessor<Tabular, Record<string, any>> {
    get type(): ProcessorType;
    _process(arrayResponse: ArrayResponse): Tabular;
}
export default ArrayToTabularTransformer;
=======
import { PipelineProcessor, ProcessorType } from '../processor';
import Tabular from '../../tabular';
import { ArrayResponse } from './storageResponseToArray';
declare class ArrayToTabularTransformer extends PipelineProcessor<Tabular, Record<string, any>> {
    get type(): ProcessorType;
    _process(arrayResponse: ArrayResponse): Tabular;
}
export default ArrayToTabularTransformer;
>>>>>>> 60d50bc (first commit)

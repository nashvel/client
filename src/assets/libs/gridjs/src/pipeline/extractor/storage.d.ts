<<<<<<< HEAD
import Storage, { StorageResponse } from '../../storage/storage';
import { PipelineProcessor, PipelineProcessorProps, ProcessorType } from '../processor';
interface StorageExtractorProps extends PipelineProcessorProps {
    storage: Storage<any>;
}
declare class StorageExtractor extends PipelineProcessor<StorageResponse, StorageExtractorProps> {
    get type(): ProcessorType;
    _process(opts: any): Promise<StorageResponse>;
}
export default StorageExtractor;
=======
import Storage, { StorageResponse } from '../../storage/storage';
import { PipelineProcessor, PipelineProcessorProps, ProcessorType } from '../processor';
interface StorageExtractorProps extends PipelineProcessorProps {
    storage: Storage<any>;
}
declare class StorageExtractor extends PipelineProcessor<StorageResponse, StorageExtractorProps> {
    get type(): ProcessorType;
    _process(opts: any): Promise<StorageResponse>;
}
export default StorageExtractor;
>>>>>>> 60d50bc (first commit)

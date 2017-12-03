import MediaConsumed from './mediaConsumed'

export default interface AppState {
    requests: number;
    media: MediaConsumed[];
}

export interface Location {
    readonly latitude: number;
    readonly longitude: number;
}

export class NodeAppError extends Error {
    public httpStatus: number;

    public constructor (message:string) {
        super(message);
        this.name = 'NodeAppError';
        this.httpStatus = 500;
    }
}

export class InvalidRequestError extends NodeAppError {
    public constructor (message:string) {
        super(message);
        this.name = 'InvalidRequestError';
        this.httpStatus = 400;
    }
}

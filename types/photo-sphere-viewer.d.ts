declare module 'photo-sphere-viewer' {
  import { Camera, Scene, WebGLRenderer } from 'three';

  export interface ViewerOptions {
    container: HTMLElement;
    panorama: string;
    navbar?: string[];
    autorotateSpeed?: string;
    touchmoveTwoFingers?: boolean;
  }

  export class Viewer {
    constructor(options: ViewerOptions);
    getCamera(): Camera;
    getScene(): Scene;
    getRenderer(): WebGLRenderer;
    destroy(): void;
  }
}

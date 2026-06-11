import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {

  constructor(private platform: Platform) {}

  // permite selecionar ou tirar uma fotografia e devolve-a como uma string base64, lidando com as diferenças entre plataformas
  public async pickPhoto(): Promise<string | null> {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      quality: 80,
      promptLabelHeader: 'Foto',
      promptLabelCancel: 'Cancelar',
      promptLabelPhoto: 'Escolher da galeria',
      promptLabelPicture: 'Tirar fotografia',
    });

    // lê a fotografia diretamente do dispositivo usando o plugin Filesystem 
    // no caso de estar a correr numa plataforma híbrida, ou converte-a para base64 no navegador
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: capturedPhoto.path!,
      });

      return `data:image/jpeg;base64,${file.data}`;
    } else {
      // converte a fotografia para base64 no navegador
      const response = await fetch(capturedPhoto.webPath!);
      const blob = await response.blob();

      return this.convertBlobToBase64(blob);
    }
  }

  // converte um blob para base64 usando um FileReader, devolvendo uma Promise 
  // que resolve com a string base64 ou rejeita em caso de erro
  private convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = reject;
      reader.onload = () => resolve(reader.result as string);

      reader.readAsDataURL(blob);
    });
  }
}
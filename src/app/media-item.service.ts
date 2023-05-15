import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root", // This will allow our service to be accessible throughout whole application
})
export class MediaItemService {
  constructor(private http: HttpClient) {}

  // This will be on interview
  get(medium: string) {
    const getOptions = {
      params: { medium },
    };
    return this.http.get<MediaItemResponse>("mediaitems", getOptions).pipe(
      map((response) => {
        return response.mediaItems;
      }),
      catchError(this.handleError)
    );
  }

  add(mediaItem) {
    return this.http.post("mediaitems", mediaItem);
  }

  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }

  private handleError(error: HttpErrorResponse): any {
    console.log(error.message);
  }
}

// This might be on interview
export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

// Make a type that's a grouping of "MediaItems"
interface MediaItemResponse {
  mediaItems: MediaItem[];
}

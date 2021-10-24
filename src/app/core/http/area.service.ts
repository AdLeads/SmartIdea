import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';
import { Area } from 'src/app/shared/models/area.model';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  constructor(private http: HttpClient) {}
  postareas(idproject: number, area: Area) {
    return this.http.post(
      `http://localhost:8080/area/Projectarea/${idproject}`,
      area
    );
  }
  getarea(idproject: number) {
    return this.http.get<Area[]>(
      `http://localhost:8080/area/Projectarealist/${idproject}`
    );
  }
  editarea(idtarea: number, area: Area) {
    return this.http.put<Area>(
      `http://localhost:8080/area/Projectarea/${idtarea}`,
      area
    );
  }
}

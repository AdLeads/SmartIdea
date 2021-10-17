import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from 'src/app/shared/models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private http: HttpClient) {}

  getSkills(iduser: number) {
    return this.http.get<Skill[]>(
      `http://localhost:8080/skills/userskills/${iduser}`
    );
  }
  postnewskill(iduser: number, skill: Skill) {
    return this.http.post(
      `http://localhost:8080/skills/userSkill/${iduser}`,
      skill
    );
  }
  delete(idskill: number, skill: Skill) {
    return this.http.put(
      `http://localhost:8080/skills/userSkill/${idskill}`,
      skill
    );
  }
  updateskill(idskill: number, skill: Skill) {
    return this.http.put(
      `http://localhost:8080/skills/userSkill/update/${idskill}`,
      skill
    );
  }

  getSkillsproject(idproject: number) {
    return this.http.get<Skill[]>(
      `http://localhost:8080/skills/projectkills/${idproject}`
    );
  }
  postnewskillproject(idproject: number, skill: Skill) {
    return this.http.post(
      `http://localhost:8080/skills/projectSkill/${idproject}`,
      skill
    );
  }
}

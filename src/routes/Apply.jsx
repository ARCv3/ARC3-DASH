
import { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import './Apply.css'
import './Form.css'

export default function Apply({ self }) {

  const {guildid} = useParams();

  return (
      <div className="application">


            <section className="form">

              <h2>Staff Application Form</h2>

                  <div class="formbold-main-wrapper">
                    <div class="formbold-form-wrapper">
                      <form action="/api/applications" method="POST">
                          <input id="guildSnowflake" name="guildSnowflake" value={guildid} />
                          <div class="formbold-mb-3">
                              <label for="experience" class="formbold-form-label">Do you have discord or other community moderation experience?</label>
                              <select required class="formbold-form-input" name="experience" id="experience">
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                              </select>
                          </div>

                          <div class="formbold-mb-3">
                              <label for="position" class="formbold-form-label"> If yes, what/is was your position?</label>

                              <select required class="formbold-form-input" name="position" id="position">
                              <option value="no exp">N/A</option>
                              <option value="owner">Owner</option>
                              <option value="admin">Admin</option>
                              <option value="moderator">Moderator or Senior Moderator</option>
                              <option value="helper">Helper or Trainee</option>

                              </select>
                          </div>

                          <div class="formbold-mb-3">
                              <label for="botexp" class="formbold-form-label">How experienced are you with Discord bots?</label>

                              <select required class="formbold-form-input" name="botexp" id="botexp">
                              <option value="moderation experience">I have experience when it comes to Discord bots and I use them for moderation</option>
                              <option value="developer experience">I have development experience when it comes to Discord bots, but I don't use them to moderate</option>
                              <option value="moderation and developer experience">I have experience developing bots and using them for moderation</option>
                              <option value="recreational experience only">I use Discord bots on a regular basis but only for recreational purposes (not moderating)</option>
                              <option value="no experience">I use Discord bots infrequently or not at all</option>

                              </select>
                          </div>
                    
                        <div class="formbold-mb-3">
                          <label for="server" class="formbold-form-label"> Please link the server you have experience in with the most members: </label>
                          <input
                            type="text"
                            name="server"
                            id="server"
                            class="formbold-form-input"
                          />
                        </div>

                        <div class="formbold-mb-3">
                          <label for="avail" class="formbold-form-label"> Please give a rough outline of your avaliabilities: </label>
                          <input
                            required
                            type="text"
                            name="avail"
                            id="avail"
                            class="formbold-form-input"
                          />
                        </div>

                        <div class="formbold-mb-3">
                          <label for="message" class="formbold-form-label">
                            Explain why you want to join the team!
                          </label>
                          <textarea
                            required
                            rows="6"
                            name="message"
                            id="message"
                            class="formbold-form-input"
                          ></textarea>
                        </div>


                        <div class="formbold-mb-3">
                          <label for="about" class="formbold-form-label">
                            Tell us about yourself!
                          </label>
                          <label for="about" class="formbold-form-label">
                          Some questions you could answer here are: What is your current occupation? What games/shows do you like? What are your hobbies? 
                          </label>
                          <textarea
                            required
                            rows="6"
                            name="about"
                            id="about"
                            class="formbold-form-input"
                          ></textarea>
                        </div>


                        <div class="formbold-input-flex">
                          <div>
                            <label for="age" class="formbold-form-label"> How old are you? </label>
                            <input
                              required
                              type="number"
                              name="age"
                              id="age"
                              min="13"
                              placeholder="Enter your age"
                              class="formbold-form-input"
                            />
                          </div>

                          <div>
                            <label for="joindate" class="formbold-form-label"> When did you join discord? </label>
                            <input
                              required
                              type="number"
                              name="joindate"
                              id="joindate"
                              placeholder="Enter the year"
                              min="2015"
                              max="2024"
                              class="formbold-form-input"
                            />
                          </div>
                        </div>

                        <button class="formbold-btn">Apply Now!</button>
                      </form>
                    </div>
                  </div>
              
            </section>        


      </div>

  )


}
import React from "react";
import "./Providers.css";
import rakin from "../../../assets/rakin.png";
import tanya from "../../../assets/tanya.png";
import sitora from "../../../assets/sitora.png";
import mitchelle from "../../../assets/mitchelle.png";
import danielle from "../../../assets/danielle.png";
import jeremy from "../../../assets/jeremy.png";
import phillip from "../../../assets/phillip.png";
import sarah from "../../../assets/sarah.png";
import perpetual from "../../../assets/perpetual.png";
import bethany from "../../../assets/bethany.png";

const Providers = () => {
  return (
    <div className="providers_container">
      <div className="providers_wrapper">
        <div className="prov_head">
          <h1>Meet Our Providers</h1>
          <button>See all providers</button>
        </div>
        <div className="cards">
          <div className="prov_card">
            <div className="card_img">
              <img src={rakin} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>APRN</p>
                <h3>Rakin Rahman</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>New York, New Jersey & 2 more.</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={tanya} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>PMHNP-BC</p>
                <h3>Tanya Monroe</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>New Jersey</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={sitora} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>APRN | PMHNP-BC</p>
                <h3>Sitora Mirsoatova</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>Connecticut & New Jersey</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={mitchelle} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>PMHNP-BC | NP</p>
                <h3>Michelle Krill</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>Massachusetts</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={danielle} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>PMHNP-BC | NP</p>
                <h3>Danielle Overton-Miller</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>New York</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={jeremy} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>APRN | PMHNP-BC</p>
                <h3>Jeremy Walsh</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>New Jersey</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={phillip} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>PMHNP-BC | NP</p>
                <h3>Phillip McDonald</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>New York, New Jersey & 2 more.</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={sarah} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>APRN | PMHNP-BC</p>
                <h3>Sarah Sakirsky</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>Massachusetts</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={perpetual} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>PMHNP-BC | NP</p>
                <h3>Perpetual Gyimah</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>New York</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
          <div className="prov_card">
            <div className="card_img">
              <img src={bethany} alt="" />
            </div>
            <div className="prov_card_prop">
              <div className="card_details details0">
                <p>APRN | PMHNP-BC | offers talk therapy</p>
                <h3>Bethany Malugin</h3>
              </div>
              <div className="card_details details1">
                <p className="text-style">Ages seen</p>
                <p>
                  <span>
                    Children (5+ yrs), Teens (13 -17 yrs), Adult (18 -64 yrs){" "}
                  </span>
                </p>
              </div>
              <div className="card_details details2">
                <p className="text-style">States Licensed</p>
                <h4>New York, New Jersey & 2 more.</h4>
              </div>
              <div className="options">
                <div>Available Today</div>
                <button>Book online</button>
              </div>
            </div>
            <div className="hover_details">
              <h3>About Provider</h3>
              <p>
                I am a board certified and experienced adult psychiatric and
                mental health nurse practitioner currently practicing at Orenda
                Psychiatry. I specialize in helping patients with anxi...
              </p>
              <button>Book online</button>
              <a href="">More info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;

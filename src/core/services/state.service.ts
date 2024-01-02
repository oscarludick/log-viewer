import { computed, signal } from '@angular/core';
import { LOGS } from '../../log';

export interface TagData {
  label: string;
  checked: boolean;
  count?: number;
}

export interface LoggerData {
  date: string;
  time: string;
  type: string;
  message: string;
  tag: string;
  level: string;
  tags: string[];
}

export interface Tag {
  data: TagData[];
  count: number;
}

export interface Logger {
  data: LoggerData[];
  count: number;
}

export interface State {
  logger: Logger;
  levels: Tag;
  tags: Tag;
  types: Tag;
  filters: Tag;
}

const STATE: State = {
  logger: {
    data: LOGS,
    count: 100,
  },
  tags: {
    data: [{ label: '[main]', checked: false, count: 0 }],
    count: 1,
  },
  types: {
    data: [
      { label: 'm.c.s.o.a.MxObuGblOrqAppianApplication', count: 2 },
      { label: 'o.s.d.r.c.RepositoryConfigurationDelegate', count: 1 },
      { label: 'o.s.b.w.e.tomcat.TomcatWebServer', count: 1 },
      { label: 'o.a.coyote.http11.Http11NioProtocol', count: 1 },
      { label: 'o.a.catalina.core.StandardService', count: 0 },
      { label: 'o.a.catalina.core.StandardEngine', count: 0 },
      { label: 'o.a.c.c.C.[Tomcat].[localhost].[/]', count: 1 },
      {
        label: 'o.s.b.w.s.c.ServletWebServerApplicationContext',
        count: 0,
      },
      { label: 'org.mongodb.driver.cluster', count: 5 },
      { label: 'org.mongodb.driver.client', count: 0 },
      { label: 'm.c.s.o.util.config.PropertiesConfig', count: 0 },
      { label: 'o.h.validator.internal.util.Version', count: 0 },
      { label: 'o.s.b.a.e.web.EndpointLinksResolver', count: 0 },
      { label: 'm.c.s.o.u.c.LoggableDispatcherServlet', count: 43 },
      { label: 'm.c.s.o.u.e.ControllerExceptionHandler', count: 0 },
      { label: 'o.s.api.AbstractOpenApiResource', count: 0 },
      { label: 'm.c.s.o.appian.service.AppianService', count: 3 },
      { label: 'm.c.s.o.a.r.AppianRepository', count: 23 },
    ],
    count: 98,
  },
  levels: {
    data: [{ label: 'INFO', checked: false, count: 0 }],
    count: 1,
  },
} as never;

export class StateService {
  state = signal<State>(STATE);

  logger = computed(() => this.state().logger);

  tags = computed(() => this.state().tags);

  types = computed(() => this.state().types);

  levels = computed(() => this.state().levels);

  filters = computed(() => {
    const tags = this.tags().data.filter(({ checked }) => checked);
    const types = this.types().data.filter(({ checked }) => checked);
    const levels = this.levels().data.filter(({ checked }) => checked);
    const active = [...tags, ...types, ...levels];
    return {
      data: active,
      count: active.length,
    };
  });

  public update(newState: Partial<State>): void {
    this.state.update((state) => ({ ...state, ...newState }));
  }

  public updateTag({ checked, label }: TagData): void {
    const tags = this.tags();
    const data = tags.data.map((tag) =>
      tag.label === label ? { ...tag, checked } : tag
    );
    this.update({ tags: { ...tags, data } });
  }

  public updateType({ checked, label }: TagData): void {
    const types = this.types();
    const data = types.data.map((type) =>
      type.label === label ? { ...type, checked } : type
    );
    this.update({ types: { ...types, data } });
  }

  public updateLevel({ checked, label }: TagData): void {
    const levels = this.levels();
    const data = levels.data.map((level) =>
      level.label === label ? { ...level, checked } : level
    );
    this.update({ levels: { ...levels, data } });
  }

  public updateAll(checked: boolean): void {
    const { tags, types, levels } = this.state();
    this.update({
      tags: {
        ...tags,
        data: tags.data.map((tag) => ({ ...tag, checked })),
      },
      types: {
        ...types,
        data: types.data.map((type) => ({ ...type, checked })),
      },
      levels: {
        ...levels,
        data: levels.data.map((level) => ({ ...level, checked })),
      },
    });
  }
}
